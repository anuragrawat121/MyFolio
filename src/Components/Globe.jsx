import { useEffect, useRef } from "react";
import * as THREE from "three";

const SIZE = 320;
const EARTH_MAP =
  "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
const EARTH_BUMP =
  "https://unpkg.com/three-globe/example/img/earth-topology.png";
const CLOUD_MAP =
  "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";

const HOME = { name: "India", lat: 21.15, lon: 79.09 };
const HUBS = [
  { name: "San Francisco", lat: 37.77, lon: -122.42 },
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Berlin", lat: 52.52, lon: 13.4 },
  { name: "Dubai", lat: 25.2, lon: 55.27 },
  { name: "Tokyo", lat: 35.68, lon: 139.65 },
];

const latLonToVector3 = (lat, lon, radius) => {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
};

const makeArc = (from, to, height = 1.38) => {
  const start = latLonToVector3(from.lat, from.lon, 1.02);
  const end = latLonToVector3(to.lat, to.lon, 1.02);
  const mid = start
    .clone()
    .add(end)
    .normalize()
    .multiplyScalar(height);
  return new THREE.QuadraticBezierCurve3(start, mid, end);
};

const Globe = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
    camera.position.z = 2.55;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(SIZE, SIZE);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    stage.appendChild(renderer.domElement);

    const disposable = [];
    const track = (object) => {
      disposable.push(object);
      return object;
    };

    const starsGeo = track(new THREE.BufferGeometry());
    const starCount = 420;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const r = 8 + Math.random() * 10;
      const v = latLonToVector3(
        Math.random() * 180 - 90,
        Math.random() * 360 - 180,
        r,
      );
      starPos[i * 3] = v.x;
      starPos[i * 3 + 1] = v.y;
      starPos[i * 3 + 2] = v.z;
    }
    starsGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starsGeo,
      track(
        new THREE.PointsMaterial({
          color: 0xdbe7ff,
          size: 0.018,
          transparent: true,
          opacity: 0.7,
        }),
      ),
    );
    scene.add(stars);

    const globe = new THREE.Group();
    globe.rotation.z = 0.35;
    scene.add(globe);

    const sphere = track(new THREE.SphereGeometry(1, 64, 64));
    const earthMat = track(
      new THREE.MeshPhongMaterial({
        color: 0x9bb4c8,
        shininess: 8,
        specular: new THREE.Color(0x222222),
      }),
    );
    const earth = new THREE.Mesh(sphere, earthMat);
    globe.add(earth);

    const atmosphere = new THREE.Mesh(
      track(new THREE.SphereGeometry(1.12, 48, 48)),
      track(
        new THREE.MeshBasicMaterial({
          color: 0x6ea8ff,
          transparent: true,
          opacity: 0.14,
          side: THREE.BackSide,
        }),
      ),
    );
    globe.add(atmosphere);

    const cloudsMat = track(
      new THREE.MeshLambertMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    const clouds = new THREE.Mesh(
      track(new THREE.SphereGeometry(1.018, 64, 64)),
      cloudsMat,
    );
    globe.add(clouds);

    scene.add(new THREE.AmbientLight(0xffffff, 0.42));
    const sun = new THREE.DirectionalLight(0xfff4e5, 1.45);
    sun.position.set(5, 1.4, 3.2);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x7ea2ff, 0.28);
    fill.position.set(-4, -1, -2);
    scene.add(fill);

    const overlay = new THREE.Group();
    globe.add(overlay);

    const hubMat = track(
      new THREE.MeshBasicMaterial({ color: 0xd7ecff }),
    );
    const homeMat = track(
      new THREE.MeshBasicMaterial({ color: 0xffc27a }),
    );
    const pinGeo = track(new THREE.SphereGeometry(0.016, 12, 12));

    const homePin = new THREE.Mesh(pinGeo, homeMat);
    homePin.position.copy(latLonToVector3(HOME.lat, HOME.lon, 1.02));
    overlay.add(homePin);

    const pulseMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xffc27a,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      }),
    );
    const pulse = new THREE.Mesh(track(new THREE.RingGeometry(0.03, 0.038, 32)), pulseMat);
    const homeNormal = latLonToVector3(HOME.lat, HOME.lon, 1);
    pulse.position.copy(latLonToVector3(HOME.lat, HOME.lon, 1.025));
    pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), homeNormal.normalize());
    overlay.add(pulse);

    HUBS.forEach((hub) => {
      const pin = new THREE.Mesh(pinGeo, hubMat);
      pin.position.copy(latLonToVector3(hub.lat, hub.lon, 1.018));
      overlay.add(pin);
    });

    const arcs = HUBS.map((hub, index) => {
      const curve = makeArc(HOME, hub, 1.32 + (index % 3) * 0.06);
      const points = curve.getPoints(64);
      const geo = track(new THREE.BufferGeometry().setFromPoints(points));
      const line = new THREE.Line(
        geo,
        track(
          new THREE.LineBasicMaterial({
            color: 0x9ecbff,
            transparent: true,
            opacity: 0.42,
          }),
        ),
      );
      overlay.add(line);

      const packet = new THREE.Mesh(
        track(new THREE.SphereGeometry(0.012, 8, 8)),
        track(new THREE.MeshBasicMaterial({ color: 0xffffff })),
      );
      overlay.add(packet);
      return { curve, packet, offset: index / HUBS.length };
    });

    const satellites = [0, 1, 2].map((index) => {
      const sat = new THREE.Mesh(
        track(new THREE.BoxGeometry(0.035, 0.018, 0.022)),
        track(
          new THREE.MeshStandardMaterial({
            color: 0xd5dde8,
            metalness: 0.7,
            roughness: 0.3,
            emissive: 0x223344,
          }),
        ),
      );
      const pivot = new THREE.Group();
      pivot.rotation.x = 0.4 + index * 0.45;
      pivot.rotation.z = index * 0.7;
      sat.position.set(1.28, 0, 0);
      pivot.add(sat);
      globe.add(pivot);
      return pivot;
    });

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    loader.load(EARTH_MAP, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      earthMat.map = texture;
      earthMat.color.set(0xffffff);
      earthMat.needsUpdate = true;
    });

    loader.load(EARTH_BUMP, (texture) => {
      earthMat.bumpMap = texture;
      earthMat.bumpScale = 0.05;
      earthMat.needsUpdate = true;
    });

    loader.load(CLOUD_MAP, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      cloudsMat.map = texture;
      cloudsMat.opacity = 0.32;
      cloudsMat.needsUpdate = true;
    });

    let dragging = false;
    let prevX = 0;
    let prevY = 0;
    let rotY = 0.9;
    let rotX = 0.28;
    let velX = 0;
    let velY = 0;
    let frameId = 0;
    const clock = new THREE.Clock();

    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";

    const onPointerDown = (event) => {
      dragging = true;
      velX = 0;
      velY = 0;
      prevX = event.clientX;
      prevY = event.clientY;
      canvas.style.cursor = "grabbing";
      canvas.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      const dx = event.clientX - prevX;
      const dy = event.clientY - prevY;
      prevX = event.clientX;
      prevY = event.clientY;
      rotY += dx * 0.0055;
      rotX = Math.max(-1.05, Math.min(1.05, rotX + dy * 0.0055));
      velX = dx * 0.0055;
      velY = dy * 0.0055;
    };

    const onPointerUp = (event) => {
      dragging = false;
      canvas.style.cursor = "grab";
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    const tick = () => {
      const elapsed = clock.getElapsedTime();

      if (!dragging) {
        rotY += velX + 0.0024;
        rotX += velY;
        velX *= 0.93;
        velY *= 0.93;
        rotX += (0.28 - rotX) * 0.018;
      }

      globe.rotation.y = rotY;
      globe.rotation.x = rotX;
      clouds.rotation.y += 0.0007;
      stars.rotation.y += 0.00015;

      const pulseScale = 1 + (Math.sin(elapsed * 2.4) + 1) * 0.55;
      pulse.scale.set(pulseScale, pulseScale, pulseScale);
      pulseMat.opacity = 0.55 - (pulseScale - 1) * 0.35;

      arcs.forEach((arc, index) => {
        const t = (elapsed * 0.12 + arc.offset) % 1;
        arc.packet.position.copy(arc.curve.getPointAt(t));
        arc.packet.scale.setScalar(0.7 + Math.sin(elapsed * 4 + index) * 0.2);
      });

      satellites.forEach((pivot, index) => {
        pivot.rotation.y += 0.004 + index * 0.0012;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      disposable.forEach((item) => item.dispose?.());
      renderer.dispose();
      if (stage.contains(canvas)) stage.removeChild(canvas);
    };
  }, []);

  return (
    <div className="globe-wrap">
      <div ref={stageRef} className="globe-stage" />
      <p className="globe-hint">India · remote corridors · drag to explore</p>
    </div>
  );
};

export default Globe;
