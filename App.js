import * as React from 'react';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { THREE, Renderer } from 'expo-three';

export default function App() {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={(gl: ExpoWebGLRenderingContext) => {
        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000 );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        function animate() {
          requestAnimationFrame( animate );
  
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
  
          renderer.render( scene, camera );
          gl.endFrameEXP();
        };

        animate();

      }}
    />
  );
}