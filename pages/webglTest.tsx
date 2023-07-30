import Layout from "../components/Layout";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function WebGLTest() {
    const { unityProvider } = useUnityContext(
        {
            loaderUrl: "/WebGLBuild/Build/WebGLBuild.loader.js",
            dataUrl: "/WebGLBuild/Build/WebGLBuild.data",
            frameworkUrl: "/WebGLBuild/Build/WebGLBuild.framework.js",
            codeUrl: "/WebGLBuild/Build/WebGLBuild.wasm"
        }
    );

    return (
        <Layout>
            <Unity
                style={{ aspectRatio: "16:9", width: "100%", height: "auto" }}
                unityProvider={unityProvider}
            />
        </Layout>
    )
}