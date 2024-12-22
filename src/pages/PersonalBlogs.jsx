import Header from "../components/Header";
import BlogCards from "../components/BlogCards";

export default function PersonalBlogs() {
  return (
    <div className="hero min-h-screen mt-3 mx-auto w-full">
      <Header />
      <div className="container">
        <div className="flex justify-between mx-auto max-w-7xl">
          <BlogCards
            link="#"
            image="../skz.jpg"
            title="travel to australia"
            description="hello hello"
          />
          <BlogCards
            image="../me4.jpg"
            title="travel to mauritius"
            description="bye bye"
          />
          <BlogCards
            image="../me4.jpg"
            title="travel to mauritius"
            description="bye bye"
          />
        </div>
      </div>
    </div>
  );
}
