import { default as email } from '../assets/mail-outline.svg';
import { default as phone } from '../assets/call-outline.svg';
import { default as birthday } from '../assets/calendar-outline.svg';
import { default as location } from '../assets/location-outline.svg';

const Contact = () => {
    return (
        <div className="personal">
            <div className="row">
                <div className="col-6 col-s-6">
                    <div className="info"> 
                        <table>
                            <tbody>
                                <tr>
                                    <td className="leftcell">
                                        <img src={email} className="svg-filter"></img>
                                    </td>
                                    <td className="rightcell">
                                        <span className="label">EMAIL</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="rightcell">
                                        jeffrey.garcia@gmail.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </div>

                <div className="col-6 col-s-12">
                    <div className="info"> 
                        <table>
                            <tbody>
                                <tr>
                                    <td className="leftcell">
                                        <img src={phone} className="svg-filter"></img>
                                    </td>
                                    <td className="rightcell">
                                        <span className="label">PHONE</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="rightcell">
                                        +44 (0) 7592217602
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>

            <div className="row">
                <div className="col-6 col-s-6">
                    <div className="info"> 
                        <table>
                            <tbody>
                                <tr>
                                    <td className="leftcell">
                                        <img src={birthday} className="svg-filter"></img>
                                    </td>
                                    <td className="rightcell">
                                        <span className="label">BIRTHDAY</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="rightcell">
                                        8-Dec-19**
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>

                <div className="col-6 col-s-12">
                    <div className="info"> 
                        <table>
                            <tbody>
                                <tr>
                                    <td className="leftcell">
                                        <img src={location} className="svg-filter"></img>
                                    </td>
                                    <td className="rightcell">
                                        <span className="label">LOCATION</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="rightcell">
                                        EN5, London,UK
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>                                
        </div>
    );
}

export default Contact;