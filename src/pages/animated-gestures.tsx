import React from 'react'
import DatasetPageTemplate from '../components/dataset-page-template'
import { newTask } from '../types/task'
import animated1 from '../img/animated_1.png'
import animated2 from '../img/animated_2.png'
import animated3 from '../img/animated_3.png'
import animated4 from '../img/animated_4.png'

const title = "Animated Gestures Dataset by Synthesis"
const description = [
    "Synthesis AI provides on-demand generation of vast amounts of photorealistic image data with an accompanying set of never before available rich 3D labels. 100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images."
]

const dataset_description = [
    "The Whole Body Animated Dataset showcases a diverse set of animated body poses, including motions in both the upper and lower body. As opposed to our Static Dataset, the sequential order of poses and environments are increased more than 100x in this animated dataset. This dataset is well suited for ML tasks such as pose estimation, whole body segmentation, and basic gesture recognition."
]

const license = [
    "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License."
]

const specifications = [
    "10k images",
    "Over 50 animation sequences",
    "100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images",
    "Rich set of pixel-perfect labels including segmentation maps, depth, surface normals, and 3D landmarks",
    "Variation of expressions from neutral to medium (as opposed to extreme)",
    "Variation in eye gaze spanning 10° in all directions",
    "Variation of head turn spanning 30° in all directions",
    "Diverse hairstyles, colors, and facial hair",
    "Accessories: glasses, headphones, face masks and headwear",
    "Variation in outfits",
    "Variation in background over a wide range of lighting and confounding elements",
    "Many different camera angles around the person",
]
const tasks = [
    newTask("Pose Estimation", [
        "Diverse animation sequences with various poses.",
        "A high variation of camera perspectives allows a prediction of  the transformation of a model from a user-defined reference pose",
        "Different heights and weights allow training with different body shapes."
    ]),
    newTask("Gesture Recognition", [
        "Over 30 sequences with hand motion, 50 sequences with whole body motions",
        "Wide variation in skin tone and lighting"
    ]),
    newTask("Whole Body Segmentation", [
        "Large segmentation areas distributed over the body, including the arms, hands, background, hair, glasses, skin, and more.",
        'Granular sub segmentation maps include 90 regions such as "neck", "torso_upper_right", "hand_right", "finger1_mid_left".'
    ])
]
const images = [animated1, animated2, animated3, animated4]

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
