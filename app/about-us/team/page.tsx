'use client'

import Image from 'next/image'

const teamMembers = [
  {
    name: "م. أحمد محمد",
    position: "المدير التنفيذي",
    image: "/placeholder-user.jpg",
    specialization: "هندسة مدنية",
    experience: "20 عاماً من الخبرة"
  },
  {
    name: "م. سارة علي",
    position: "مدير المشاريع",
    image: "/placeholder-user.jpg",
    specialization: "هندسة معمارية",
    experience: "15 عاماً من الخبرة"
  },
  {
    name: "م. محمد عمر",
    position: "مدير التصميم",
    image: "/placeholder-user.jpg",
    specialization: "هندسة معمارية",
    experience: "12 عاماً من الخبرة"
  },
  {
    name: "م. فاطمة خالد",
    position: "مدير الاستشارات",
    image: "/placeholder-user.jpg",
    specialization: "هندسة إنشائية",
    experience: "18 عاماً من الخبرة"
  },
  {
    name: "م. عمر أحمد",
    position: "مدير التطوير",
    image: "/placeholder-user.jpg",
    specialization: "هندسة ميكانيكية",
    experience: "14 عاماً من الخبرة"
  },
  {
    name: "م. ليلى محمود",
    position: "مدير الجودة",
    image: "/placeholder-user.jpg",
    specialization: "هندسة صناعية",
    experience: "16 عاماً من الخبرة"
  }
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">فريق العمل</h1>

        <div className="text-right mb-12" dir="rtl">
          <p className="text-gray-600 text-lg mb-6">
            يضم فريقنا نخبة من المهندسين والخبراء المتخصصين في مختلف المجالات الهندسية، يجمعهم شغف الابتكار والتميز في تقديم أفضل الحلول الهندسية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-right" dir="rtl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 mb-1">{member.specialization}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-right" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">انضم إلى فريقنا</h2>
          <p className="text-gray-600 mb-6">
            نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا. إذا كنت تمتلك الشغف والخبرة في مجال الهندسة، نرحب بانضمامك إلى عائلتنا.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
            تقدم للوظائف
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">خبراتنا</h3>
            <p className="text-gray-600">
              يمتلك فريقنا خبرات متنوعة في مختلف مجالات الهندسة، مما يمكننا من تقديم حلول متكاملة لعملائنا.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">التطوير المستمر</h3>
            <p className="text-gray-600">
              نحرص على التطوير المستمر لمهارات فريقنا من خلال برامج تدريبية وورش عمل متخصصة.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">روح الفريق</h3>
            <p className="text-gray-600">
              نؤمن بأهمية العمل الجماعي والتعاون المشترك لتحقيق أفضل النتائج لعملائنا.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
