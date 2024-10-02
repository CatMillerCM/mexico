import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import styles from './about.module.css';

const Page = () => {
  return (
    <main className={styles.about}>
      <Header />
      <Nav
        pageName="home"
      />
      <div className={styles.text}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ullamcorper velit, sagittis suscipit massa. Donec faucibus feugiat odio. Sed non sem et dui placerat venenatis. Suspendisse sem ipsum, bibendum ut neque quis, condimentum rhoncus sapien. Donec suscipit fermentum leo a vehicula. Nunc molestie, tortor ac scelerisque commodo, quam odio gravida quam, sit amet ultricies mi tellus sit amet lorem. Suspendisse fermentum id nulla in tempor. Nulla facilisi. Integer at purus et nulla egestas rutrum nec sed mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempus ante eros, id pulvinar risus venenatis eu.

Duis eu venenatis ligula. Maecenas sodales quam non felis dignissim, a posuere felis vulputate. Nunc efficitur molestie purus a congue. Morbi vel elit urna. Nam in nisl ex. Vivamus ac elementum libero. Nunc ut leo nec justo mattis tempus. Duis libero neque, laoreet sed felis id, imperdiet luctus leo. Etiam in justo porta, pulvinar nunc ut, ultrices mi.

Donec a neque nulla. Duis consequat aliquam augue tincidunt rutrum. Vivamus ut scelerisque dui. In vitae dignissim quam. Suspendisse nec vestibulum ex. Aenean dapibus lectus vel tincidunt semper. Donec egestas purus ac nisl fringilla, nec facilisis lorem gravida. Phasellus rhoncus, urna sed aliquam ullamcorper, enim lorem convallis tellus, quis rhoncus enim velit eget metus. Integer ornare, nunc quis rhoncus commodo, dui lacus suscipit nisl, a sagittis justo lorem quis diam. Integer eget turpis et libero scelerisque viverra. Fusce dignissim dui nec sem accumsan euismod.

Vestibulum vel ante eget orci sollicitudin suscipit vitae et justo. In hac habitasse platea dictumst. Donec posuere, libero et eleifend pulvinar, ante velit dapibus lorem, vitae auctor dui erat vitae ante. Maecenas elementum augue a orci vulputate posuere nec nec enim. Nunc aliquam ligula at luctus vestibulum. Curabitur eget nunc id ipsum varius tristique sed ut ante. Vivamus mollis sollicitudin urna, eget dignissim urna sollicitudin eget.</p>
      </div>
    </main>
  );
};

export default Page;