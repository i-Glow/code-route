import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Flex } from "../../../shared/Flex";
import Navigation from "../../../shared/Navigation";
import { Body, Container, Grid, Wrapper } from "./styles";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import { Button, OutlinedButton } from "../../../shared/Button";
//assets
import { danger } from "../../../../assets/Panneaux/Danger";
import { interdiction } from "../../../../assets/Panneaux/Interdiction";
import { obligation } from "../../../../assets/Panneaux/Obligation";
import { indication } from "../../../../assets/Panneaux/Indication";

const panneaux = [
  {
    type: "Dangers",
  },
  {
    type: "Interdictions",
  },
  {
    type: "Obligations",
  },
  {
    type: "Indications",
  },
];

const assets = {
  dangers: danger,
  interdictions: interdiction,
  obligations: obligation,
  indications: indication,
};

export default function OutletTemplate() {
  const location = useLocation();
  const route = location?.state?.type;
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const saveLastPage = (route, page) => {
    localStorage.setItem(
      "lastPage",
      JSON.stringify({ path: location.pathname, route, page })
    );
  };

  useEffect(() => {
    setPage(location?.state?.page || 0);
  }, [location]);

  useEffect(() => {
    saveLastPage(route, page);
  }, [page, location]);

  const pageNavigator = (whereTo) => {
    if (whereTo === "back" && page > 0) setPage(page - 1);
    else if (whereTo === "next" && page < assets[route]?.length - 1)
      setPage(page + 1);
    else if (
      whereTo === "finish" &&
      route !== panneaux[panneaux.length - 1].type.toLowerCase()
    ) {
      const nextPage =
        panneaux[panneaux.findIndex((i) => i.type.toLowerCase() === route) + 1]
          .type;

      navigate(`/panneaux/${nextPage.toLowerCase()}`, {
        state: {
          type: nextPage.toLowerCase(),
        },
      });
      setPage(0);
    } else if (
      whereTo === "previous" &&
      route != panneaux[0].type.toLowerCase()
    ) {
      const previousPage =
        panneaux[panneaux.findIndex((i) => i.type.toLowerCase() === route) - 1]
          .type;

      navigate(`/panneaux/${previousPage.toLowerCase()}`, {
        state: {
          type: previousPage.toLowerCase(),
        },
      });
      setPage(0);
    }
  };

  return (
    <Body>
      <Wrapper>
        <Container>
          <Flex m="40px 0">
            <Navigation
              title={route?.charAt(0).toUpperCase() + route?.slice(1)}
            />
          </Flex>
          {!!assets[route] && (
            <Fragment>
              {assets[route][page]?.text?.map((txt, key) => (
                <div
                  style={{ marginBottom: "16px", fontSize: "18px" }}
                  dangerouslySetInnerHTML={txt}
                  key={key}
                />
              ))}
              {page === assets[route]?.length - 1 ? (
                <img src={assets[route][page]?.images[0]?.img} />
              ) : (
                <Grid>
                  {assets[route][page]?.images?.map((image, key) => (
                    <Flex jc="flex-start" key={key}>
                      <img src={image?.img} height="100px" />
                      <p>{image?.desc}</p>
                    </Flex>
                  ))}
                </Grid>
              )}
              <Flex m="auto 20px 70px 20px" jc="space-between">
                {page === 0 ? (
                  route !== "dangers" ? (
                    <Flex
                      style={{
                        color: "var(--blue)",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => pageNavigator("previous")}
                    >
                      <HiChevronDoubleLeft />
                      <p>previous course</p>
                    </Flex>
                  ) : (
                    <div></div>
                  )
                ) : (
                  <OutlinedButton onClick={() => pageNavigator("back")}>
                    <HiChevronDoubleLeft />
                    <p>back</p>
                  </OutlinedButton>
                )}
                {page === assets[route]?.length - 1 ? (
                  <Button onClick={() => pageNavigator("finish")}>
                    <p>next course</p>
                  </Button>
                ) : (
                  <Button onClick={() => pageNavigator("next")}>
                    <p>next</p>
                    <HiChevronDoubleRight />
                  </Button>
                )}
              </Flex>
            </Fragment>
          )}
        </Container>
      </Wrapper>
    </Body>
  );
}
