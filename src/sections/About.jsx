import { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export const About = () => {

    const wordsArray_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    const wordsArray_2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "

    const threeContainerRef = useRef(null);
    const objectRef = useRef(null);

    const textRef_1 = useRef(null);
    const isInView_1 = useInView(textRef_1, {once: true, margin: "75%"})

    const textRef_2 = useRef(null);
    const isInView_2 = useInView(textRef_2, {once: true, margin: "75%"})

    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 1.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        const resizeRenderer = () => {
            const width = threeContainerRef.current.clientWidth;
            const height = threeContainerRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        resizeRenderer();

        window.addEventListener('resize', resizeRenderer);
        threeContainerRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 15);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const mtlLoader = new MTLLoader();
        mtlLoader.load('/assets/objects/camera.mtl', (materials) => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/assets/objects/camera.obj', (object) => {
                
                object.scale.set(10, 10, 10);
                objectRef.current = object;
                scene.add(object);

                const animate = () => {
                    requestAnimationFrame(animate);

                    object.rotation.x = 0.00;
                    object.rotation.y += 0.01;

                    renderer.render(scene, camera);
                };

                animate();
                
            });
        });

        camera.position.z = 6;
        camera.position.y = 1.5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {

            window.removeEventListener('resize', resizeRenderer);
            if (threeContainerRef.current) {
                threeContainerRef.current.removeChild(renderer.domElement);
            }
        };

    }, []);
  
    return (
        <section className='py-8 shadow-2xl bg-black pb-[25vh]'>
            <div className='mx-auto w-[90%]'>

                <div ref={textRef_1}>
                    <div className='overflow-hidden'>
                        <motion.p variants={animation} initial="initial" animate={isInView_1 ? "enter" : ""} className='md:text-6xl text-4xl text-white leading-none font-serif overflow-hidden'>{wordsArray_1}</motion.p>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 grid-rows-2 min-[750px]:grid-rows-1 min-[750px]:grid-cols-2'>
                    
                    <div ref={threeContainerRef}></div>
                    
                    <div>
                        
                        <div ref={textRef_2}>
                            <div className='overflow-hidden'>
                                <motion.p variants={animation} initial="initial" animate={isInView_2 ? "enter" : ""} className='md:text-4xl text-2xl text-white leading-none overflow-hidden'>{wordsArray_2}</motion.p>        
                            </div>
                        </div>
                        
                        <div className='py-2 my-6 border-t-2 border-b-2'>
                            <a href="mailto:jordi@koalitickollective.com" className='md:text-2xl group text-base text-white leading-none flex items-center justify-between'>
                                <span className='group-hover:pl-4 transition-all duration-300'>Contact</span>
                                <span className='group-hover:pr-4 transition-all duration-300'>→</span>
                            </a>
                        </div>

                    </div>
                    
                </div>

            </div>
        </section>
    )
}
