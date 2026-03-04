import { contactData } from "../../data/contact/contactData";

const ContactInfo = () => {
  return (
    <div className="lg:mt-12">
      <div className="flex flex-col justify-center gap-2">
        {contactData.map((item) => {
          const Icon = item.icon;

          const content = (
            <div
              className="flex items-center gap-4 p-3 lg:p-4 rounded-xl
              bg-gray-900 border border-gray-800
              motion-safe:hover:border-cyan-600 transition-all duration-300 group"
            >
              <div className="text-cyan-400 text-lg lg:text-xl">
                <Icon />
              </div>

              <div>
                <p className="text-sm text-gray-400">{item.title}</p>
                <p className="text-white lg:font-medium motion-safe:group-hover:text-cyan-400 transition">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
