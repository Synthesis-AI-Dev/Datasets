import React from 'react'
import DatasetPageTemplate from '../components/dataset-page-template'
import { newTask } from '../types/task'
import close1 from '../img/close_1.png'

const title = "Animated Gestures Dataset by Synthesis"
const description = [
    "Synthesis AI provides on-demand generation of vast amounts of photorealistic image data with an accompanying set of never before available rich 3D labels. 100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images.",
    "Great for facial segmentation, Matting / Background Removal, Landmark Estimation, and more."
]
const specifications = [
    "10k images",
    "Rich set of pixel-perfect labels including segmentation maps, depth, surface normals, and 3Dlandmarks",
    "Variation of expressions from neutral to extreme",
    "Variation in eye gaze over 10°",
    "Variation of head pose of 30° in all directions",
    "Many different hairstyles, colors, and facial hair",
    "Accessories include glasses, headphones, and face masks",
    "Variation in outfits",
    "Variation in background over a wide range of lighting and confounding elements",
]
const tasks = [
    newTask("Variation", [
        "Variation over identities, facial expression, and confounds challenges models segmenting facial regions.",
        'Granular subsegmentation maps include X regions such as "ear_left", "eyelashes", "eyelid", "hair"',
    ]),
    newTask("Effieciency", [
        "Variation in background, lighting, and hair styles produce mimics hard to segment real-world conditions",
        "Pixel-accurate alpha masks as ground truth"
    ]),
    newTask("Perspectives", [
        "A high variation of camera perspectives and facial expressions enables different perspectives on the face in order to improve the landmark estimation",
        "2D and 3D anatomical and contour landmarks available"
    ])
]
const images = [close1, close1, close1, close1]

const AnimatedGestures = () => {
    return (
        <DatasetPageTemplate
            title={title}
            description={description}
            specifications={specifications}
            tasks={tasks}
            images={images}
        />
    )
}
export default AnimatedGestures