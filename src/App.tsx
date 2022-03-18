import React from 'react'
import close1 from './img/close_1.png'
import logoSvg from './img/logo.svg'
import './App.css'

const App = () => {
    return (
        <main className='page-container'>
            <section id="main-section" data-at="section">
                <div className="section-fit section-relative">
                    <div className="item-absolute" id="logo">
                        <div className="cropped item-block" data-at="image-cropp">
                            <img className="item-content-box item-block image " data-at="image" alt=""
                                src="//v.fastcdn.co/u/5989b1a1/58940432-0-SynthesisAI-SurveyRe.svg"
                                srcSet="//v.fastcdn.co/u/5989b1a1/58940432-0-SynthesisAI-SurveyRe.svg 2x" />
                        </div>
                    </div>
                    <div className="item-absolute headline  " id="title" data-at="headline">
                        <h1>Close-up Open Dataset by Synthesis</h1>
                    </div>

                    <div className="item-absolute" id="below-title-description" data-at="paragraph">
                        Synthesis AI provides
                        on-demand generation of vast amounts of photorealistic image data with an
                        accompanying set of never before available rich 3D labels. 100 diverse identities
                        spanning gender, skin tone, and age. 1024 x 1024 RGB images.
                        <br />
                        <br />
                        Great for facial segmentation, Matting / Background Removal, Landmark Estimation, and more.
                        <br />
                        <br />
                    </div>

                    <div className="item-absolute" id="download-instructions-button">
                        <button className="onpage-link btn btn-shadow   item-block" data-at="button">
                            Download Insturctions
                        </button>
                    </div>

                </div>
            </section>

            <section className="content-layout" id="page-block-specifications" data-at="section">
                <div id="images-block">
                    {[close1, close1, close1, close1].map((image, i) => <img className='sample-image' alt="a" key={i} src={image} />)}
                </div>

                <div className='specifications-block'>
                    <h5 className="headline orange-text small-title">ABOUT THE SET</h5>

                    <h1 className='headline section-headline section-title'> Specifications </h1>

                    <div id="paragraph-container" data-at="paragraph">
                        <ul>
                            {[
                                "10k images",
                                "Rich set of pixel-perfect labels including segmentation maps, depth, surface normals, and 3Dlandmarks",
                                "Variation of expressions from neutral to extreme",
                                "Variation in eye gaze over 10°",
                                "Variation of head pose of 30° in all directions",
                                "Many different hairstyles, colors, and facial hair",
                                "Accessories include glasses, headphones, and face masks",
                                "Variation in outfits",
                                "Variation in background over a wide range of lighting and confounding elements",
                            ].map(point => <li>{point}</li>)}
                        </ul>
                    </div>


                </div>

            </section>

            <section id="page-block-second-row" data-at="section">
                <div className=" headline" id="key-title" data-at="headline">
                    <h5 className="orange-text headline">KEY MACHINE LEARNING TASKS  </h5>
                </div>

                <h1 className="headline section-headline text-align-center" id="big-dark-title-container" data-at="headline">
                    The data can be used to train...&nbsp;
                </h1>

                <div className='content-layout'>
                    {[
                        {

                            title: "Variation",
                            points: [
                                "Variation over identities, facial expression, and confounds challenges models segmenting facial regions.",
                                'Granular subsegmentation maps include X regions such as "ear_left", "eyelashes", "eyelid", "hair"',
                            ]
                        },
                        {

                            title: "Effieciency",
                            points: [
                                "Variation in background, lighting, and hair styles produce mimics hard to segment real-world conditions",
                                "Pixel-accurate alpha masks as ground truth"
                            ]
                        },
                        {

                            title: "Perspectives",
                            points: [
                                "A high variation of camera perspectives and facial expressions enables different perspectives on the face in order to improve the landmark estimation",
                                "2D and 3D anatomical and contour landmarks available"
                            ]
                        }
                    ].map(block =>
                        <div className="third-p" data-at="paragraph">
                            <h5 className="orange-text headline text-align-center">{block.title}  </h5>
                            <ul>
                                {block.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            <section id="page-block-download" data-at="section">
                <h1 className="headline section-headline text-align-center" id="download-title" data-at="headline">
                    Download Instructions
                </h1>
            </section>

            <section id="page-block-footer">
                <div id="copyright">
                    Copyright © 2021. All rights reserved
                </div>
                <img className="logo" alt="logo" src={logoSvg} />
            </section>
        </main>
    )
}
export default App