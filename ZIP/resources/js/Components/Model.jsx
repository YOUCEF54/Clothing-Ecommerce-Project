import { useGLTF,OrbitControls  } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"
export default function Model(){
    const earth = useGLTF('/cloth/scene.gltf');

    const group = useRef(null);
    return(
        <group  ref={group}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />


           <primitive object={earth.scene} scale={2.5} />
        </group>
    )
}
