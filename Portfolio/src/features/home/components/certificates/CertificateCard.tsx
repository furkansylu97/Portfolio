import { useState } from "react";
import type { Certificate } from "../../data/certificates/certificatesData";

interface Props {
  certificate: Certificate;
}

const CertificateCard: React.FC<Props> = ({ certificate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#14213c] shadow-md rounded-xl overflow-hidden py-8 px-4 transition-all duration-300 motion-safe:hover:-translate-y-3 motion-safe:hover:shadow-2xl">
        <div className="relative group">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-52 object-contain"
          />

          <div className="absolute inset-0 p-4 opacity-0 motion-safe:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div
              className="w-[80%] h-full bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <span className="text-white font-semibold text-sm border border-white px-4 py-2 rounded-lg motion-safe:hover:bg-white hover:text-black transition">
                Görüntüle
              </span>
            </div>
          </div>
        </div>

        <div className="lg:p-4">
          <h3 className="text-lg text-white font-semibold">
            {certificate.title}
          </h3>
          <p className="text-base font-semibold text-gray-500">
            {certificate.organization}
          </p>
          <p className="text-base font-semibold text-gray-400 mt-1">
            {certificate.date}
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-8"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default CertificateCard;
