export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[0.5fr_1fr_0.25fr] grid-rows-1 gap-10">
      <div className="rounded-lg border-2 p-2  flex flex-col gap-2 justify-center">
        <h1 className="text-xl font-semibold underline">Recomended Blogs </h1>
        <div className="flex flex-col gap-y-2">
          <div className="h-20 rounded-lg p-2 border">Random Blog</div>
          <div className="h-20 rounded-lg p-2 border">Random BLog 2</div>
          <div className="h-20 rounded-lg p-2 border">K BLOGS</div>
          <div className="h-20 rounded-lg p-2 border">HI BLOGS</div>
        </div>
      </div>
      {children}
      <div className="rounded-lg border-2 p-2 h-[100%]"></div>
    </div>
  );
}
