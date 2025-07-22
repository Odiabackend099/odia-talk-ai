import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      date: "November 15, 2024",
      title: "ODIA Voice AI Launches WhatsApp Integration for Nigerian Businesses",
      image: "mountain-bg"
    },
    {
      date: "October 22, 2024", 
      title: "ODIA Announces Multi-Language Support Including Yoruba and Igbo",
      image: "mountain-bg"
    },
    {
      date: "September 08, 2024",
      title: "ODIA Welcomes Leading Nigerian Tech Investors as Strategic Partners",
      image: "mountain-bg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-navy to-blue-800 relative">
                <div className="absolute top-4 left-4 text-white">
                  <div className="text-sm font-bold">ODIA Voice AI</div>
                  <div className="text-xs">{item.date}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-navy group-hover:text-green transition-colors">
                  {item.title}
                </h3>
                <Button className="bg-gold text-navy hover:bg-gold/90 w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;