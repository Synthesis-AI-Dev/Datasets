import React from 'react'
import DatasetPageTemplate from '../components/dataset-page-template'
import { newTask } from '../types/task'
import vehicle1 from '../img/vehicle_1.png'
import vehicle2 from '../img/vehicle_2.png'
import vehicle3 from '../img/vehicle_3.png'
import vehicle4 from '../img/vehicle_4.png'

const title = "Vehicle Driver In-Cabin Dataset by Synthesis"

const description = [
    "Synthesis AI provides on-demand generation of vast amounts of photorealistic image data with an accompanying set of never before available rich 3D labels. 100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images.",
    "Great for facial segmentation, Matting / Background Removal, Landmark Estimation, and more."
]

const dataset_description = [
    "The In-Vehicle Dataset showcases drivers of various sizes looking in different directions, in both visual spectrum and NIR.  Starting from 2022, it will be mandatory for the European Union car manufacturers to install warnings of driver drowsiness and distraction (e.g. smartphone use while driving). The dataset has cameras in 4 positions: top of dashboard, multimedia console, steering wheel and rear view mirror.  It also consists of  images taken at all times of day and night. This dataset is well suited for ML tasks such as gaze estimation, basic gesture recognition, and body size detection."
]

const license = [
    "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License."
]

const specifications = [
    "10k images",
    "100 diverse identities spanning gender, skin tone, and age. 1024 x 1024 RGB images",
    "Variation of expressions from opened eyes to closed eyes",
    "Variation in eye gaze spanning 10° in all directionse",
    "Variation in eye gaze over 10°",
    "Variation of head turns between 7° and 30° in all directions",
    "Diverse hairstyles, colors, and facial hair",
    "Accessories: transparent and reflective glasses",
    "Diverse static poses",
    "Variation in outfits",
    "Variation in background over a wide range of lighting and confounding elements",
    "4 different camera positions: top of dashboard, multimedia console, steering wheel and rear view mirror",
    "One half of the dataset consists of daytime scenes and the other half nighttime scenes",
    "Each scene is made out of two frames, one is an rgb image another is an nir image."
]
const tasks = [
    newTask("Gaze Estimation in car", [
        "Variation in eye gaze direction, different head turns, gestures and different camera positions allow a training for a great eye gaze in car estimation.",
    ]),
    newTask("Gestures", [
        "Over 50 in vehicle gesture sequences with hand motion",
        "Gestures with both, only one and no hand on the steering wheel"
    ]),
    newTask("Body Size", [
        "Different heights and weights allow training with different body shapes."
    ])
]
const images = [vehicle1, vehicle2, vehicle3, vehicle4]

const VehicleDriverInCabin = () => {
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
export default VehicleDriverInCabin
