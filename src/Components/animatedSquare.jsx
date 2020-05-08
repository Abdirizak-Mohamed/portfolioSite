import React, { Component } from "react";
import * as THREE from "three";
class AnimatedSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height
    };
  }
  componentDidMount() {
    console.log(this.state);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      this.state.width / this.state.height,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(this.state.width, this.state.height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    const boxWidth = 3;
    const boxHeight = 3;
    const boxDepth = 3;

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const materials = [
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/React.png"))
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/HTML5.png"))
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/CSS3.png"))
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/NodeJS.png"))
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/React.png"))
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(require("../images/React.png"))
      })
    ];

    const material = new THREE.MeshBasicMaterial({
      map: loader.load(require("../images/HTML5.png"))
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
export default AnimatedSquare;
