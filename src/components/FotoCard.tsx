export default function FotoCard() {
  return (
    <div className="flex gap-8 min-w-full mx-auto flex-wrap justify-center mt-12">
      <img src="/bmw.jpg" alt="BMW car" className="max-w-120"></img>
      <p className="text-xl max-w-[400px] md:max-w-3xs">
        BMW 2018 M3 CS Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Velit, et accusantium sit incidunt, sed facilis, sapiente quos minus
        pariatur vero mollitia placeat ad eveniet ratione officia fugit
        explicabo reprehenderit. Quo!
      </p>
    </div>
  );
}
