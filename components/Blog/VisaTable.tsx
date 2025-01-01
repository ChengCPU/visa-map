interface Props {
  data:boolean[]
}

const countries:string[] = ['🇪🇺 Schengen Area (EU)','🇺🇸 United States','🇨🇦 Canada','🇬🇧 United Kingdom','🇦🇺 Australia','🇳🇿 New Zealand','🇯🇵 Japan','🇷🇺 Russia','🇨🇳 China','🇰🇷 South Korea','🇹🇭 Thailand','🇲🇽 Mexico']

const VisaList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <style jsx>{`
        .list-container {
          max-width: 300px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: #000;
          background: #fff;
        }
        .list-item {
          display: flex;
          justify-content: space-between;
          padding: 4px 8px;
          border-bottom: 1px solid #000;
          font-size: 0.9rem;
        }
        .list-item:last-child {
          border-bottom: none;
        }
        .status {
          font-weight: bold;
        }
      `}</style>
      <div className="list-container">
        <div className="list-item">
          <span>{'Visa-free/ETA/ESTA access'}</span>
        </div>
        {countries.map((country, index) => (
          <div key={index} className="list-item">
            <span>{country}</span>
            <span className="status">{data[index] ? '✅' : '❌'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaList;