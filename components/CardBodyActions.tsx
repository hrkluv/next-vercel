import React from "react";
import styled from "styled-components"
import {useModal} from 'react-hooks-use-modal'

export type IconsObj = {
  type: string;
  src: string;
  count?: number | undefined;
}
type StaticProps = {
  iconsObj: IconsObj[];
  style: React.CSSProperties;
}

const CardBodyActions = (
    {
      iconsObj,
      ...props
    }: StaticProps
  ) => {
  const [ Modal, open, close, isOpen ] = useModal('__next')
  return (
    <Wrapper>
      {
        iconsObj.map((ic, i) => (
          <Cells key={i}>
            <div className={ic.type + ' icon_action_wrap'}>
              <div className="icon_wrap">
                <div className="icon_hover"></div>
                <span onClick={open}><img src={ic.src}/></span>
              </div>
              {ic.hasOwnProperty('count') && <div className="icon_count">{ic.count ? ic.count : ''}</div>}
            </div>
          </Cells>
        ))
      }
      <Modal>
        <ModalWrapper>
          <span {...props}>Modal</span><br/>
          <button onClick={close}>close</button>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  )
}


const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 4px;
`
const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
`
const Cells = styled.div`
  flex: 1;
  .icon_action_wrap {
    display: inline-flex;
    align-items: center;
    &.comment{
      &:hover {
      .icon_wrap {
        .icon_hover {
          background-color: rgba(29, 155, 240, .1);
        }
      }
    }
    }
    &.retweet{
      &:hover {
        .icon_wrap {
          .icon_hover {
            background-color: rgba(0, 186, 124, .1);
          }
        }
      }
    }
    &.iine{
      &:hover {
        .icon_wrap {
          .icon_hover {
            background-color: rgba(249, 24, 128, .1);
          }
        }
      }
    }
    &:hover {
      .icon_wrap {
        .icon_hover {
          background-color: #ddd;
        }
      }
    }
    .icon_wrap {
      position: relative;
      .icon_hover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: -6px;
        border-radius: 9999px;
        transition: .2s;
      }
      img {
        position: relative;
        width: 18.75px;
        height: 18.75px;
        vertical-align: bottom;
      }
    }
    .icon_count {
      font-size: 14px;
      padding: 0 12px;
    }
  }
`

export default CardBodyActions