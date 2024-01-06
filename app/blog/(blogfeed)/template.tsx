export default function Template({ children }: { children: React.ReactNode }) {
    console.log("hi this is template");
    return (
      <div className="border rounded-lg flex flex-col gap-2">
        <div className="flex justify-between">
            <h1>Blogs</h1>
            <div className="flex gap-2 items-center">Filter</div>
          </div> 
       {children}
        
      </div>
    );
  }
  