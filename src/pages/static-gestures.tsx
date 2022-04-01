import React from 'react'
import DatasetPageTemplate from '../components/dataset-page-template'
import { newTask } from '../types/task'
import static1 from '../img/static_1.png'
import static2 from '../img/static_2.png'
import static3 from '../img/static_3.png'
import static4 from '../img/static_4.png'

const title = "Static Gestures Dataset"
const description = [
    "The Whole Body Static Dataset showcases a diverse set of still body poses, including motions in both the upper and lower body. As opposed to our Animated Dataset, the diversity of poses and environments are increased more than 100x in this static dataset. This dataset is well suited for ML tasks such as pose estimation, whole body segmentation, and basic gesture recognition.",
]

const specifications = [
    "10k images",
    "100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images",
    "Rich set of pixel-perfect labels including segmentation maps, depth, surface normals, and 3D landmarks",
    "Variation of expressions from neutral to medium",
    "Variation in eye gaze spanning 10° in all directions",
    "Variation of head turn spanning 30° in all directions",
    "Diverse hairstyles, colors, and facial hair",
    "Diverse static poses",
    "Accessories: glasses, headphones, face masks and headwear",
    "Variation in outfits",
    "Variation in background over a wide range of lighting and confounding elements",
    "Variation in camera angles spanning 30° in all directions around the perso",
]
const tasks = [
    newTask("Pose Estimation", [
        "Wide variation in camera perspectives challenge models in being robust to camera orientation.",
        'Granular subsegmentation maps include X regions such as "ear_left", "eyelashes", "eyelid", "hair"',
    ]),
    newTask("Gesture Recognition", [
        "Over 30 gestures with hand motion, 50 gestures featuring whole body motions.",
        "Wide variation in skin tone and lighting."
    ]),
    newTask("Whole Body Segmentation", [
        "Large segmentation areas distributed over the body, including the arms, hands, background, hair, glasses, skin, and more.",
        'Granular sub segmentation maps include 90 regions such as "neck", "torso_upper_right", "hand_right", "finger1_mid_left".'
    ])
]
const images = [static1, static2, static3, static4]

const StaticGestures = () => {
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
export default StaticGestures
