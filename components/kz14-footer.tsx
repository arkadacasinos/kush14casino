const kz14Tags = [
  { label: '#Kush-Casino', href: '#kz14-top' },
  { label: '#Kush-Casino-официальный-сайт', href: '#kz14-about' },
  { label: '#Kush-Casino-официальный', href: '#kz14-license' },
  { label: '#Куш-Казино-официальный-сайт', href: '#kz14-faq' },
  { label: '#Куш-Казино-официальный', href: '#kz14-license' },
  { label: '#Куш-Казино', href: '#kz14-about' },
  { label: '#Kush-Casino-зеркало', href: '#kz14-mirror' },
  { label: '#Kush-Casino-играть', href: '#kz14-play' },
  { label: '#Куш-Казино-зеркало-рабочее', href: '#kz14-mirror' },
  { label: '#Куш-Казино-играть', href: '#kz14-play' },
  { label: '#Куш-Казино-онлайн', href: '#kz14-mobile' },
  { label: '#Куш-Казино-зеркало', href: '#kz14-mirror' },
]

export default function Kz14Footer() {
  return (
    <footer className="kz14-foot">
      <nav aria-label="Поиск по сайту: хештеги ключевых фраз">
        <div className="kz14-tags">
          {kz14Tags.map((tag) => (
            <a key={tag.label} className="kz14-tag" href={tag.href}>
              {tag.label}
            </a>
          ))}
        </div>
      </nav>
      <p className="kz14-note">
        © 2026 Kush Casino. 18+ | Играйте ответственно. Куш казино зеркало рабочее обновляется
        регулярно.
      </p>
    </footer>
  )
}
