import Meta from './Meta.js';

const Page = props => (
  <div>
    <Meta title={props.name} />
    {props.children}
    <style jsx global>
      {`
        body {
          font-family: 'Gloria Hallelujah', cursive;
        }
      `}
    </style>
  </div>
);

export default Page;
