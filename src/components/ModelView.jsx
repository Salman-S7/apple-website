/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import * as THREE from 'three'
import Loader from './Loader'

const ModelView = (
    { index,
    groupRef,
    gsapType,
    controlRef,
    setRotation,
    item,
    size }
) => {
        return (
            <View index={index}
                id={gsapType}
                className={`h-full w-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
            >
                {/* //abmiant light */}
                <ambientLight intensity={0.3} />
                {/* camera */}
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                {/* lights */}
                <Lights />
                {/* suspense */}
                <OrbitControls makeDefault
                    ref={controlRef}
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.4}
                    target={new THREE.Vector3(0, 0, 0)}
                    onEnd={()=> setRotation(controlRef.current.getAzimuthalAngle())}
                />
                <group ref={groupRef}
                    name={`${index === 1} ? "small" : "large" `}
                position={[0,0,0]}>

                <Suspense fallback={<Loader/>} />
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </group>
            </View>
        )
}

export default ModelView