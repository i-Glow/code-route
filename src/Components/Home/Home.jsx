import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../shared/Link";
import { Flex } from "../shared/Flex";
import { Container, SubCtn, TempImg, Wrapper } from "./styles";
import { TbArrowRight } from "react-icons/tb";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GoBook } from "react-icons/go";

export default function Home() {
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    let lp = localStorage.getItem("lastPage");
    lp = JSON.parse(lp);
    if (lp) setLastPage(lp);
  }, []);

  return (
    <Wrapper>
      {!lastPage ? (
        <div>
          <h2>Welcome to the route code learning app</h2>
          <p>
            By finishing our courses you'll be knowing different road signs and
            driver priorities.
          </p>
          You will be taking your diving test with confidence and a good
          knowledge of roads.
          <p></p>
        </div>
      ) : (
        <>
          <h2>Welcome back!</h2>
          <Flex>
            <TempImg />
            <div>
              <h4>Continue where you left off</h4>
              <h4>Name of the sign</h4>
            </div>
          </Flex>
          <Link
            to={lastPage?.path}
            state={{ type: lastPage?.route, page: lastPage?.page }}
          >
            <Flex
              style={{
                color: "var(--dark-blue)",
                textDecoration: "underline",
              }}
            >
              <p>Go to page</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </>
      )}
      <Container>
        <SubCtn>
          <h3>Courses</h3>
          <Flex gap="20px">
            <GoBook style={{ fontSize: "32px" }} />
            <h4>Start discovering how the roads work</h4>
          </Flex>
          <Link to="/courses">
            <Flex
              style={{ color: "var(--dark-blue)", textDecoration: "underline" }}
            >
              <p>Browse courses</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </SubCtn>
      </Container>
      <Container>
        <SubCtn>
          <h3>Driving test</h3>
          <Flex gap="20px">
            <HiOutlineClipboardList style={{ fontSize: "32px" }} />
            <h4>Ready? You can start testing what you learned here.</h4>
          </Flex>
          <Link to="/">
            <Flex
              style={{ color: "var(--dark-blue)", textDecoration: "underline" }}
            >
              <p>Test yourself!</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </SubCtn>
      </Container>
    </Wrapper>
  );
}
