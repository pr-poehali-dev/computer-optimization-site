import { motion } from "framer-motion";

const CodeAnimation = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur-lg opacity-70"></div>
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        <pre className="text-sm text-teal-400 overflow-x-auto pb-4">
          <code>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-blue-400">class</span> <span className="text-teal-300">PcOptimizer</span> {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {"  "}
              <span className="text-violet-400">constructor</span>() {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {"    "}
              <span className="text-cyan-300">this</span>.services = [<span className="text-amber-300">'Windows'</span>, <span className="text-amber-300">'BIOS'</span>, <span className="text-amber-300">'Latency'</span>];
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {"  "}
              {"}"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              {"  "}
              <span className="text-violet-400">optimize</span>() {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              {"    "}
              <span className="text-red-400">return</span> <span className="text-amber-300">'Enhanced Performance'</span>;
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            >
              {"  "}
              {"}"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              {"}"}
            </motion.div>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeAnimation;
