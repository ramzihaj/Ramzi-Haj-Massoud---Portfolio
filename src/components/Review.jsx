import React from 'react';
import ReviewCard from './ReviewCard';

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content: 'Ramzi helped us redesign our CI/CD pipelines and containerise our services. Deployments are now faster and much more reliable.',
    name: 'Amine Ben Youssef',
    imgSrc: 'images/people-1.jpg',
    company: 'Tunis Cloud Solutions'
  },
  {
    content: 'Great DevOps mindset. He set up Docker, Kubernetes and monitoring for our platform, making incidents easier to detect and resolve.',
    name: 'Ons Trabelsi',
    imgSrc: 'images/people-2.jpg',
    company: 'Carthage Tech Labs'
  },
  {
    content: 'Professional and pragmatic. Ramzi automated our build and deployment workflow with GitHub Actions and improved our release process.',
    name: 'Mahdi Gharbi',
    imgSrc: 'images/people-3.jpg',
    company: 'Sfax Digital Factory'
  },
  {
    content: 'Very smooth collaboration. Clear communication, strong DevOps skills and a real focus on reliability and scalability.',
    name: 'Sarra Khemiri',
    imgSrc: 'images/people-4.jpg',
    company: 'North Africa Fintech'
  },
  {
    content: 'He migrated our services to containers and optimised our Nginx setup. Performance and observability both improved.',
    name: 'Yassine Jaziri',
    imgSrc: 'images/people-5.jpg',
    company: 'Tunis Dev Studio'
  },
  {
    content: 'Reliable engineer with strong DevOps practices. Our team now has a stable CI/CD pipeline and a cleaner infrastructure.',
    name: 'Nour Ben Salem',
    imgSrc: 'images/people-6.jpg',
    company: 'Maghreb Software Group'
  },
];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true

      },
      x:'-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up"> {/* Using headline-2, assuming CSS fix */}
          What our customers say
        </h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;