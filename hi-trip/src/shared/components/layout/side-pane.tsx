import { usePaneStore } from "@/shared/store/usePaneStore";
import { AnimatePresence, motion } from "framer-motion";

export function SidePan() {
  const { widgets } = usePaneStore();

  return (
    <aside className="w-80 bg-bg-white border-l border-grey-3 flex flex-col h-screen overflow-hidden">
      {/* 동적 영역: 위젯 주입 슬롯 */}
      <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-6">
        <AnimatePresence mode="wait">
          {widgets.map((widget, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              {widget}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </aside>
  );
}