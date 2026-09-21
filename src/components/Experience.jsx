import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ArtCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.08, 0.6)}
    className="bg-jetLight rounded-[16px] p-2 shadow-card flex flex-col items-center">
    <div className="w-full aspect-square flex items-center justify-center bg-night/20 rounded-[10px] overflow-hidden">
      <img
        src={experience.title}
        alt="artwork"
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-taupe text-[11px] leading-[14px] font-poppins mt-2 text-center">
      {experience.date}
    </p>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          My Art/Graphic Design.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 sm:pl-16 pl-[2rem] pr-6 text-taupe text-[16px] max-w-3xl leading-[26px]">
        Feel free to use any of these artworks I created as references for
        requests on any graphic designs/programs I make for you!
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
        gap-6 sm:px-16 px-[2rem] items-start">
        {experiences.map((experience, index) => (
          <ArtCard key={index} experience={experience} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');