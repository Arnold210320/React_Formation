import { Link,Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="text-center bg-slate-400 pb-20">
      <p className="text-4xl font-bold pt-10 mb-8">
        Here is a company analytics
      </p>
      <p className="text-2xl pt-10 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        reprehenderit corrupti eligendi est. Voluptatibus maiores, minus amet
        mollitia culpa commodi exercitationem dolorum beatae soluta deleniti
        officia vero. Iure, quidem qui.
      </p>
      <nav className="text-center">
        <Link
          className="text-2xl font-semibold mx-2"
          to="/analytics/cybersecur"
        >
          CyberSecur
        </Link>
        <Link
          className="text-2xl font-semibold mx-2"
          to="/analytics/devellopment"
        >
          Devellopment
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
