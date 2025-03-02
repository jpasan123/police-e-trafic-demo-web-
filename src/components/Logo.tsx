export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} bg-navy-900 rounded-lg p-1`}>
      <img 
        src="/etraffic-logo.png" 
        alt="Sri Lanka Police eTraffic Logo" 
        className="w-full h-full"
      />
    </div>
  );
}