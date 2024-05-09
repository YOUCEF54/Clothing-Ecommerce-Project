import { Canvas,useThree } from "@react-three/fiber";
import Model from "./Model";

import { Suspense } from "react";

export default function Scene(){
    return(
        <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
        <Suspense fallback={null}>
        <ambientLight intensity={5} />

                <Model/>
            </Suspense>
        </Canvas>
    )
}
