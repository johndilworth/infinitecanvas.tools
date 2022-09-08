const NUMBER_OF_ITEMS_TO_SELECT = 4

const IndexRandomGallery = ({ galleryItems }) => {
  const shuffled = galleryItems.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, NUMBER_OF_ITEMS_TO_SELECT)

  return (
    <ul className="grid grid-cols-1 540:grid-cols-2 860:grid-cols-4 gap-24 w-full">
      {selected.map(({ frontmatter: { title, image } }) => (
        <li
          className="p-24 bg-brown bg-opacity-5 rounded-4 space-y-16"
          key={title}
        >
          <div className="bg-white aspect-[16/9]">
            <img
              src={`/images/gallery/${image}`}
              alt={`Screenshot of ${title}`}
            />
          </div>
          <h2 className="mb-4 sans-20 text-gray">{title}</h2>
        </li>
      ))}
    </ul>
  )
}

export default IndexRandomGallery
