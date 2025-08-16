import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">من نحن</h1>
            <div className="prose prose-lg max-w-none text-right">
              <p className="text-gray-600 leading-relaxed mb-6">
                شركة الكابتن للخدمات والحلول الهندسية هي شركة رائدة في مجال الخدمات الهندسية والاستشارات المتخصصة. 
                تأسست الشركة بهدف تقديم حلول هندسية مبتكرة ومتطورة تلبي احتياجات عملائنا في مختلف القطاعات.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                نحن نفخر بفريق عمل متخصص ومؤهل يضم نخبة من المهندسين والخبراء في مختلف التخصصات الهندسية، 
                مما يمكننا من تقديم خدمات عالية الجودة تتماشى مع أحدث المعايير العالمية.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
