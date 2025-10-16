import css from "./author.module.css";
import AuthorContent from "./Content";
import AuthorSidebar from "./Sidebar";

export default function Author() {
  return (
    <div className={css.container}>
      <div className={css.author_container}>
        <AuthorSidebar />
        <AuthorContent />
      </div>
    </div>
  );
}
