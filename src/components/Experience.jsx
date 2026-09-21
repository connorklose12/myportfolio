import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ArtCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.08, 0.6)}
    className="bg-jetLight rounded-[16px] p-3 shadow-card flex flex-col items-center">
    <img
      src={experience.title}
      alt="artwork"
      className="w-full aspect-square object-cover rounded-[10px]"
    />
    <p className="text-taupe text-[13px] leading-[18px] font-poppins mt-3 text-center">
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
        className="mt-10 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 
        lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:px-16 px-[2rem]">
        {experiences.map((experience, index) => (
          <ArtCard key={index} experience={experience} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');