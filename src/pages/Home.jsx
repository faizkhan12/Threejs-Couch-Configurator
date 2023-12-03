import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { Button } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <a href="https://threejs.org/" rel="noreferrer" target="_blank">
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contan cursor-pointer"
              />
            </a>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 style={{ color: "#fff" }} className="head-text">
                GET <br className="xl:block hidden" />
                YOUR OWN <br />
                COUCH
              </h1>
            </motion.div>
            <motion.div {...headTextAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-500 text-base">
                So why wait? Start creating your perfect custom couch today with
                our <strong>3D couch customizer</strong>. With endless
                possibilities and unparalleled convenience, you'll wonder how
                you ever lived without it!
              </p>
              <Button
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
