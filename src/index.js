import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
//
//
// Skip to content
// Search or jump to…
//
// Pull requests
// Issues
// Marketplace
// Explore
//
// @MRKrog
// 26.7k
// 2.5k
// 57.6k22kmrdoob/three.js
//  Code Issues 517 Pull requests 106 Projects 1 Wiki Security Insights
// three.js/examples/webgl_loader_gltf.html
// @mrdoob mrdoob Examples: Improved visual quality in some examples.
// 3a7b71e 9 days ago
// @mrdoob@donmccurdy@elalish@tparisi@Mugen87@WestLangley@takahirox@Itee@richtr@looeee@dubejf@bdysvik@bhouston@06wj
// 127 lines (83 sloc)  3.39 KB
//
// <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<title>three.js webgl - glTF loader</title>
// 		<meta charset="utf-8">
// 		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
// 		<link type="text/css" rel="stylesheet" href="main.css">
// 	</head>
//
// 	<body>
// 		<div id="info">
// 			<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - GLTFLoader<br />
// 			Battle Damaged Sci-fi Helmet by
// 			<a href="https://sketchfab.com/theblueturtle_" target="_blank" rel="noopener">theblueturtle_</a><br />
// 			<a href="https://hdrihaven.com/hdri/?h=royal_esplanade" target="_blank" rel="noopener">Royal Esplanade</a> by <a href="https://hdrihaven.com/" target="_blank" rel="noopener">HDRI Haven</a>
// 		</div>
//
// 		<script type="module">
// 			import * as THREE from '../build/three.module.js';
// 			import Stats from './jsm/libs/stats.module.js';
// 			import { OrbitControls } from './jsm/controls/OrbitControls.js';
// 			import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
// 			import { RGBELoader } from './jsm/loaders/RGBELoader.js';
// 			import { RoughnessMipmapper } from './jsm/utils/RoughnessMipmapper.js';
// 			var container, stats, controls;
// 			var camera, scene, renderer;
// 			init();
// 			animate();
// 			function init() {
// 				container = document.createElement( 'div' );
// 				document.body.appendChild( container );
// 				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
// 				camera.position.set( - 1.8, 0.6, 2.7 );
// 				scene = new THREE.Scene();
//
//
//
//
// 				renderer = new THREE.WebGLRenderer( { antialias: true } );
// 				renderer.setPixelRatio( window.devicePixelRatio );
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				renderer.toneMapping = THREE.ACESFilmicToneMapping;
// 				renderer.outputEncoding = THREE.sRGBEncoding;
// 				container.appendChild( renderer.domElement );
// 				var pmremGenerator = new THREE.PMREMGenerator( renderer );
// 				pmremGenerator.compileEquirectangularShader();
// 				controls = new OrbitControls( camera, renderer.domElement );
// 				controls.target.set( 0, 0, - 0.2 );
// 				controls.update();
// 				window.addEventListener( 'resize', onWindowResize, false );
// 				// stats
// 				stats = new Stats();
// 				container.appendChild( stats.dom );
// 			}
// 			function onWindowResize() {
// 				camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 			}
// 			//
// 			function animate() {
// 				requestAnimationFrame( animate );
// 				renderer.render( scene, camera );
// 				stats.update();
// 			}
// 		</script>
//
// 	</body>
// </html>
// © 2020 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
