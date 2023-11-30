import React from "react";
import styled from "styled-components";

const PoweredBy = () => {
  return (
    <Container>
      <p>GABRIEL GOSSELIN</p>

      <p>Icon used </p>

      <div className="wrapper">
        <a href="https://www.flaticon.com/free-icons/form" title="form icons">
          Form icons created by Freepik - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/drop" title="drop icons">
          Drop icons created by Vitaly Gorbachev - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/dashboard"
          title="dashboard icons"
        >
          Dashboard icons created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/support"
          title="support icons"
        >
          Support icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/partnership-handshake"
          title="Partnership handshake icons"
        >
          Partnership handshake icons created by Freepik - Flaticon
        </a>

        <a href="https://www.flaticon.com/free-icons/agile" title="agile icons">
          Agile icons created by Uniconlabs - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/collaboration"
          title="collaboration icons"
        >
          Collaboration icons created by small.smiles - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/partnership-handshake" title="Partnership handshake icons">Partnership handshake icons created by Pixel perfect - Flaticon</a>
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default PoweredBy;
