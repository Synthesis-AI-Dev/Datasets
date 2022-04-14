import React from 'react'
import DatasetPageTemplate from '../components/dataset-page-template'
import { newTask } from '../types/task'
import close1 from '../img/close1.png'
import close2 from '../img/close2.png'
import close3 from '../img/close3.png'
import close4 from '../img/close4.png'
import close5 from '../img/close5.png'
import close6 from '../img/close6.png'
import close7 from '../img/close7.png'
import close8 from '../img/close8.png'
import close9 from '../img/close9.png'

const title = "Close-up Open Dataset"
const description = [
    "The Close Up Dataset showcases a diverse set of humans with the camera focused on the head and shoulder, in multiple environments and camera angles. This dataset is therefore particularly suited for machine learning tasks like facial segmentation, matting / background removal and landmark estimation – among others.",
]

const specifications = [
    "10k images",
    "100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images",
    "Rich set of pixel-perfect labels including segmentation maps, depth, surface normals, and 3D landmarks",
    "Variation of expressions from neutral to extreme",
    "Variation in eye gaze spanning 10° in all directions",
    "Variation of head turn spanning 15° in all directions",
    "Diverse hairstyles, colors, and facial hair",
    "Accessories: hats, glasses, headphones, and face masks",
    "Variation in outfits",
    "Variation in background over a wide range of lighting and confounding elements",
    "Many different camera angles around the person",
]
const tasks = [
    newTask("Facial segmentation", [
        "Variation over identities, facial expression, and confounds challenges models segmenting facial regions.",
        'Granular sub segmentation maps includes 35 face regions such as "ear_left", "eyelashes", "eyelid", "hair".',
    ]),
    newTask("Matting / Background Removal", [
        "Variation in background, lighting, and hair styles produce mimics hard to segment real-world conditions.",
        "Pixel-accurate alpha masks as ground truth."
    ]),
    newTask("Landmark Estimation", [
        "A high variation of camera perspectives and facial expressions enables different perspectives on the face in order to improve the landmark estimation.",
        "2D and 3D anatomical and contour landmarks available."
    ])
]
const images = [close1, close2, close3, close4, close5, close6, close7, close8, close9]
const downloadFolder = "close-up-dataset-by-synthesis-ai"

const CloseUp = () => {
    return (
        <DatasetPageTemplate
            title={title}
            description={description}
            specifications={specifications}
            tasks={tasks}
            images={images}
            downloadFolder={downloadFolder}
        />
    )
}
export default CloseUp
