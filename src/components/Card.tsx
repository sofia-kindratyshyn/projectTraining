export default function Card() {
  return (
    <>
      <div className="p-4 border-[1px] inline-flex border-gray-400">
        <div className="max-w-[500px]">
          <h5 className="text-3xl mb-2.5">Заголовок карточки</h5>
          <p className="text-xl mb-3.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            necessitatibus rem odit, aliquam iusto iure accusantium quae dolorem
            consequuntur saepe.
          </p>
          <a
            href="#"
            className="btn btn-animation inline-block hover:bg-[#0950C3] py-[12px] px-[42px] cursor-pointer bg-[#0B64F4] text-white"
          >
            Кнопка
          </a>
        </div>
      </div>
    </>
  );
}
