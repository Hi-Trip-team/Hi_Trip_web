interface ActionButtonProps {
    title: string;
}

export function ActionButton({ title }: ActionButtonProps) {
  return (
    <button className="w-full py-4 bg-primary text-white rounded-xl text-button-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-800/20 active:scale-[0.98]">
      {title}
    </button>
  );
}