type Props = {
  label: string;
  className: string;
  onClick?: () => void;
};

export const CategoryBarItem = ({ label, className, onClick }: Props) => {
  return <span onClick={onClick} className={className}>{label}</span>;
};
