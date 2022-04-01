import React from 'react'
import logoSvg from '../img/logo.svg'
import '../App.css'
import { Task } from '../types/task'

const DatasetPageTemplate = ({ title, description, specifications, tasks, images }: { title: string, description: string[], specifications: string[], tasks: Task[], images: string[] }) => {
    return (
        <main className='page-container'>
            <section id="first-orange-section" data-at="section">
                <img id="top-logo" className="item-content-box display-block image height-100 " data-at="image" alt=""
                    src="//v.fastcdn.co/u/5989b1a1/58940432-0-SynthesisAI-SurveyRe.svg"
                    srcSet="//v.fastcdn.co/u/5989b1a1/58940432-0-SynthesisAI-SurveyRe.svg 2x" />
                <h1 className="headline white-text" id="title" >{title}</h1>

                <div className="white-text" id="below-title-description" data-at="paragraph">
                    {description.map((line, i) =>
                        <p key={i}>
                            {line}
                            <br />
                            <br />
                        </p>)
                    }
                    <p>Synthesis AI provides programmatic generation of vast amounts of photorealistic image data with an accompanying set of never-before-available rich 3D labels.  Learn more about <a href="https://synthesis.ai/products/"> <u> our platform</u></a>.</p>
                    <br />
                </div>

                <div id="download-instructions-button-container">
                    <a className="btn btn-shadow display-block" href="#page-block-download" data-at="button">
                        Download Instructions
                    </a>
                    <div className='white-text tiny-text text-align-center' id="license">
                        *Free, Open <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> <u>Non Commercial License </u> </a>
                    </div>
                </div>
            </section>

            <section className="content-layout" id="page-block-specifications" data-at="section">
                <div id="images-block">
                    {images.map((image, i) => <img className='sample-image' alt="a" key={i} src={image} />)}
                </div>

                <div className='specifications-block'>
                    <h5 className="headline orange-text small-title">ABOUT THE SET</h5>

                    <h1 className='headline section-headline section-title'> Specifications </h1>

                    <div id="paragraph-container" data-at="paragraph">
                        <ul>
                            {specifications.map((point, i) => <li key={i}>{point}</li>)}
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
                    {tasks.map((block, i) =>
                        <div key={i} className="third-p" data-at="paragraph">
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

                <div className='download-instructions-content'>
                    <ol>
                        <li className='instruction'>Download the dataset using the AWS CLI. The CLI can be installed by following instructions provided by AWS <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"> <u>here</u></a>.
                        </li>
                        <li className='instruction'> To perform the download, run the command <code> aws s3 cp s3://opensynthetics-datasets/{`<SET_S3_FOLDER_NAME> <dst_directory>`} --recursive --no-sign-request </code>where SET_S3_FOLDER_NAME should be replaced with whatever folder name you want for a given dataset.
                        </li>
                    </ol>
                    <div id="license-with-image">
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />
                        This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                        </a>.
                    </div>
                </div>

            </section>

            <section id="page-block-footer">
                <div id="copyright">
                    Copyright © 2021. All rights reserved
                </div>
                <img id="bottom-logo" alt="logo" src={logoSvg} />
            </section>
        </main>
    )
}
export default DatasetPageTemplate
