import PropTypes from "prop-types";
import { Component } from "react";
import { Modal } from '../../Modal/Modal';
import { GalleryItem, ImageGalleryItemImage } from './GalleryItem.styled';

export class ImageGalleryItem extends Component{
    
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
        showModal: !showModal,
        }));
    };
    
    render() {
        return (
            <>
                <GalleryItem onClick={this.toggleModal}>
                    <ImageGalleryItemImage src={this.props.webformatURL} alt={this.props.tag} />
                </GalleryItem>
                {this.state.showModal &&
                    <Modal onClose={this.toggleModal} largeImageURL={this.props.largeImageURL} tag={this.props.tag} />
                }
            </>
        );
    };
}
   

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tag: PropTypes.string,
}