import React from 'react'
import logoSvg from '../img/logo.svg'
import '../App.css'
import { Task } from '../types/task'

const DatasetPageTemplate = ({ title, description, specifications, tasks, images }: { title: string, description: string[], specifications: string[], tasks: Task[], images: string[] }) => {
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
                        <h1>{title}</h1>
                    </div>

                    <div className="item-absolute" id="below-title-description" data-at="paragraph">
                        {description.map((line, i) =>
                            <p key={i}>
                                {line}
                                <br />
                                <br />
                            </p>)
                        }
                        <br />
                        <br />
                    </div>

                    <div className="item-absolute" id="download-instructions-button">
                        <a className="onpage-link btn btn-shadow item-block" href="#page-block-download" data-at="button">
                            Download Instructions
                        </a>
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
export default DatasetPageTemplate
