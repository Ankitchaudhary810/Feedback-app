const Badge = ({
  badgeName,
  isActive,
}: {
  badgeName: string;
  isActive: boolean;
}) => {
  return (
    <div className="p-5 text-white font-bold">
      <span
        className={`${
          isActive ? "bg-blue-500" : null
        } rounded-md w-7 h-9 text-sm px-4 py-2`}
      >
        {badgeName}
      </span>
    </div>
  );
};

export default Badge;
