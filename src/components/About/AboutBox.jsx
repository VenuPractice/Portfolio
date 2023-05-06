import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">50</h3>
                    <span className="about__subtitle">Projects Completed</span>

                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">250</h3>
                    <span className="about__subtitle">Assignments Completed</span>

                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">1430</h3>
                    <span className="about__subtitle">Cup of Coffe</span>

                </div>
            </div>

        </div>
    )
}

export default AboutBox