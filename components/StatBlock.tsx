type Stat = {
  value: string;
  label: string;
};

type StatBlockProps = {
  stats: Stat[];
};

export default function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl font-extrabold text-primary sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-foreground/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
